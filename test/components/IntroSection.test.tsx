import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { IntroSection } from '../../src/lib/components/IntroSection';
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/lib/theme/theme';
afterEach(() => {
  cleanup();
});

jest.mock('../../static/dp.jpeg', () => 'mocked_dp.jpeg');

test('unit test for IntroSection.tsx', () => {
  // Write unit tests here

  render(
    <ThemeProvider theme={theme}>
      <IntroSection name={'#'} />
    </ThemeProvider>,
  );
  const element = screen.getByTestId('wrapper-test-id');
  expect(element).toBeTruthy();
  expect(element).toContainElement(screen.getByTestId('gatewrapper-test-id'));

  const gateWrapper = screen.getByTestId('gatewrapper-test-id');
  expect(gateWrapper).toBeTruthy();
  expect(gateWrapper).toHaveStyleRule(
    'animation',
    expect.stringContaining('0.25s linear forwards'),
  );
  expect(gateWrapper).toContainElement(screen.getByTestId('leftgate-test-id'));
  expect(gateWrapper).toContainElement(screen.getByTestId('rightgate-test-id'));

  const leftGate = screen.getByTestId('leftgate-test-id');
  expect(leftGate).toBeTruthy();
  expect(leftGate).toHaveStyleRule(
    'animation',
    expect.stringContaining('1s ease-in forwards'),
  );

  const rightGate = screen.getByTestId('rightgate-test-id');
  expect(rightGate).toBeTruthy();
  expect(rightGate).toHaveStyleRule('animation', '1s ease-in forwards');

  const DpWrapper = screen.getByTestId('Dp-wrapper-test-id');
  expect(DpWrapper).toBeTruthy();
  expect(DpWrapper).toContainElement(screen.getByTestId('Dp-img-test-id'));

  const DpImage = screen.getByTestId('Dp-img-test-id');
  expect(DpImage).toBeTruthy();
  expect(DpImage).toHaveStyleRule(
    'animation',
    'auraPulse 2s infinite alternate',
  );
  expect(DpImage).toHaveStyleRule('animation-duration', '2s');
  expect(DpImage).toHaveStyleRule('animation-timing-function', 'infinite');
  expect(DpImage).toHaveStyleRule('animation-fill-mode', 'alternate');

  const InfoWrapper = screen.getByTestId('Info-wrapper-test-id');
  expect(InfoWrapper).toBeTruthy();
  expect(InfoWrapper).toContainElement(
    screen.getByTestId('Name-wrapper-test-id'),
  );

  const NameWrapper = screen.getByTestId('Name-wrapper-test-id');
  expect(NameWrapper).toBeTruthy();
  expect(NameWrapper).toContainElement(
    screen.getByTestId('Name-texttyper-test-id'),
  );
  expect(NameWrapper).toHaveStyleRule(
    'animation',
    expect.stringContaining('textGlitch 1.5s linear forwards'),
  );

  const NameTextTyper = screen.getByTestId('Name-texttyper-test-id');
  expect(NameTextTyper).toBeTruthy();
  expect(NameTextTyper.textContent).toBeTruthy();

  const SummaryWrapper = screen.getByTestId('summaryWrapper-test-id');
  expect(SummaryWrapper).toBeTruthy();
  expect(SummaryWrapper.textContent).toBeTruthy();
});
