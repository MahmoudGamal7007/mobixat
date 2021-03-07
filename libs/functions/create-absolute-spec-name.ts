export default function createAbsoluteName(en_spec_name) {
  return "mobile_" + en_spec_name.toLowerCase().trim().replace(/\s/g, "_");
}
