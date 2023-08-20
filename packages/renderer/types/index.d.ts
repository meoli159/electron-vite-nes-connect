declare interface Window {
  api: {
    login: (...data: object) => void;
    register: (...data: object) => void;
  };
}
