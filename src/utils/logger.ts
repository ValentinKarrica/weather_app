export const logger: any = (...args: Array<any>) => {
  logger.error = (...errorArgs: Array<any>) => {
    console.log(`%c ${JSON.stringify(errorArgs)}`, "color: #d32f2f");
  };

  const mode = process.env.NODE_ENV;

  if (mode !== "development") {
    return;
  }

  try {
    console.groupCollapsed(
      `%c ${JSON.stringify(args)}`,
      "color:#379683; font-size: 1.2; font-weight: bold"
    );
    console.trace();
    console.groupEnd();
  } catch (error) {
    console.log(`%c ${args}`, "color:blue; font-size: 1.2; font-weight: bold");
  }
};
