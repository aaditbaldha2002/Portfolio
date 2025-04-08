export type AppState = {
  showSkillPopup: boolean;
  skillPopupName: string;
  showEmailPopup: boolean;
  showResumePopup: boolean;
};

export const initState = {
  showSkillPopup: false,
  skillPopupName: '',
  showEmailPopup: false,
  showResumePopup: false,
};
