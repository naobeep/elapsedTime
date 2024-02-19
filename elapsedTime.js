import { colorsSetting } from "./_colorSetting";

colorsSetting()

export const elapsedTime = async func => {
  console.log('Start!'.warn);
  const startTime = new Date();

  await func();

  console.log('Complete!'.warn);
  const elapsedTime = new Date() - startTime;
  console.log(`Execution time: ${elapsedTime}ms`.verbose);
};
