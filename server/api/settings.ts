export default defineEventHandler(async (event) => {
  const settings = await useStorage().getItem("settings");
  return settings;
});