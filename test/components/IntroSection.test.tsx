import { act, cleanup, render, screen } from '@testing-library/react';
import { IntroSection } from '../../src/lib/components/IntroSection';
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/lib/theme/theme';
import { useScroll, useTransform } from 'framer-motion';

afterEach(cleanup);

jest.mock('../../static/dp.jpeg');

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useScroll: jest.fn(),
  useTransform: jest.fn(),
}));

describe('IntroSection Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <IntroSection name={'#'} />
      </ThemeProvider>,
    );
  });

  test('renders the main wrapper', () => {
    expect(screen.getByTestId('wrapper-test-id')).toBeTruthy();
  });

  describe('Gate Animation', () => {
    test('ContentWrapper starts with opacity 0', () => {
      const contentWrapper = screen.getByTestId('content-wrapper');
      expect(contentWrapper).toHaveStyleRule('opacity', '0');
    });

    test('ContentWrapper applies fadeIn animation after animation ends', () => {
      const contentWrapper = screen.getByTestId('content-wrapper');

      // Simulate animation end event
      act(() => {
        contentWrapper.dispatchEvent(new AnimationEvent('animationend'));
      });

      expect(contentWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('0.15s'),
      );
      expect(contentWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('linear'),
      );
      expect(contentWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('forwards'),
      );
    });

    test('renders the gate wrapper with correct animation styles', () => {
      const gateWrapper = screen.getByTestId('gatewrapper-test-id');
      expect(gateWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('0.25s'),
      );
      expect(gateWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('linear'),
      );
      expect(gateWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('forwards'),
      );
      expect(gateWrapper).toHaveStyleRule('overflow-x', 'hidden');
    });

    test('contains left and right gate elements with animations', () => {
      const leftGate = screen.getByTestId('leftgate-test-id');
      expect(leftGate).toBeTruthy();
      expect(leftGate).toHaveStyleRule(
        'animation',
        expect.stringContaining('1s'),
      );
      expect(leftGate).toHaveStyleRule(
        'animation',
        expect.stringContaining('ease-in'),
      );
      expect(leftGate).toHaveStyleRule(
        'animation',
        expect.stringContaining('forwards'),
      );

      const rightGate = screen.getByTestId('rightgate-test-id');
      expect(rightGate).toBeTruthy();
      expect(rightGate).toHaveStyleRule(
        'animation',
        expect.stringContaining('1s'),
      );
      expect(rightGate).toHaveStyleRule(
        'animation',
        expect.stringContaining('ease-in'),
      );
      expect(rightGate).toHaveStyleRule(
        'animation',
        expect.stringContaining('forwards'),
      );
    });
  });

  describe('Content & Image Wrappers', () => {
    test('renders the ContentWrapper', () => {
      expect(screen.getByTestId('ContentWrapper-test-id')).toBeTruthy();
    });

    test('renders the DP image with animation', () => {
      const dpImage = screen.getByTestId('Dp-img-test-id');
      expect(dpImage).toHaveStyleRule('animation', '2s');
      expect(dpImage).toHaveStyleRule('animation', 'infinite');
      expect(dpImage).toHaveStyleRule('animation', 'alternate');
    });

    test("for testing if Monarch's image rendered", () => {
      const monarchImg = screen.getByAltText('Sung Jin woo');
      expect(monarchImg).toBeTruthy();

      beforeEach(() => {
        (useScroll as jest.Mock).mockReturnValue({ scrollYProgress: 0.5 });

        (useTransform as jest.Mock).mockReturnValue(50);
      });

      const motionDiv = monarchImg.closest('div');
      expect(motionDiv).toHaveStyle('position: absolute');
      expect(motionDiv).toHaveStyle('right: 0');

      expect(motionDiv).toHaveStyle(`y: 50`);
    });
  });

  describe('Text & Info Section', () => {
    test('renders the NameWrapper with text animation', () => {
      const nameWrapper = screen.getByTestId('Name-wrapper-test-id');
      expect(nameWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('1.5s'),
      );
      expect(nameWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('linear'),
      );
      expect(nameWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('forwards'),
      );
    });

    test('renders the NameTextTyper with text content', () => {
      const contentWrapper = screen.getByTestId('content-wrapper');
      act(() => {
        contentWrapper.dispatchEvent(new AnimationEvent('animationend'));
      });

      const nameTextTyper = screen.getByTestId('Name-texttyper-test-id');
      expect(nameTextTyper.textContent).toBeTruthy();

      expect(nameTextTyper).toHaveStyleRule(
        'animation',
        expect.stringContaining('1.5s'),
      );
      expect(nameTextTyper).toHaveStyleRule(
        'animation',
        expect.stringContaining('linear'),
      );
      expect(nameTextTyper).toHaveStyleRule(
        'animation',
        expect.stringContaining('forwards'),
      );
    });

    test('renders the SummaryWrapper with non-empty text', () => {
      const contentWrapper = screen.getByTestId('content-wrapper');
      act(() => {
        contentWrapper.dispatchEvent(new AnimationEvent('animationend'));
      });

      const summaryWrapper = screen.getByTestId('summaryWrapper-test-id');
      expect(summaryWrapper.textContent).toBeTruthy();

      expect(summaryWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('1.5s'),
      );
      expect(summaryWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('linear'),
      );
      expect(summaryWrapper).toHaveStyleRule(
        'animation',
        expect.stringContaining('forwards'),
      );
    });
  });
});
