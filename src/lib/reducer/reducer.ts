import { AppState } from '../state/initState';

export type ActionType = {
  type: string;
  payload: string;
};

export const reducer = (state: AppState, action: ActionType): AppState => {
  switch (action.type) {
    case 'SHOW_SKILL_POPUP':
      return {
        ...state,
        showSkillPopup: true,
        skillPopupName: action.payload,
      };

    case 'CLOSE_SKILL_POPUP':
      return {
        ...state,
        showSkillPopup: false,
        skillPopupName: action.payload,
      };

    case 'SHOW_EMAIL_POPUP':
      return {
        ...state,
        showEmailPopup: true,
      };
    case 'SHOW_RESUME_POPUP':
      return {
        ...state,
        showResumePopup: true,
      };
    default:
      return state;
  }
};
