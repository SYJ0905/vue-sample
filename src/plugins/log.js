const log = () => ({
  success(logContent) {
    return {
      code: logContent.code,
      text: logContent.text,
      data: logContent.data,
    };
  },
  error(logContent) {
    return {
      code: logContent.code,
      text: logContent.text,
      desc: logContent.data,
    };
  },
});

export const LOG = log();
