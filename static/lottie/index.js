const fs = require("fs/promises");
const path = require("path");
const groups = [
  { key: "circles", name: "圆形" },
  { key: "line", name: "线型" },
  { key: "target", name: "加载" },
];
async function main() {
  let paths = await fs.readdir(path.join(__dirname, "json"));
  return groups.map((g) => {
    return {
      name: g.name,
      en_name: g.key,
      list: paths
        .filter((p) => p.startsWith(g.key))
        .map((p) => {
          return {
            name: p.slice(0, -5),
            code: p.slice(0, -5),
            path: `lottie/json/${p}`,
            thumb: `lottie/json/${p}`,
          };
        }),
    };
  });
}

main().then((data) => {
  console.log(JSON.stringify(data));
});
