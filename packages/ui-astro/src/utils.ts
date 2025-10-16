export function setByPath(obj: any, path: string, value: any) {
  // Преобразуем `a[0].b` → `a.0.b`
  const parts = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let cur = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (cur[key] == null) {
      // создаём объект или массив в зависимости от следующего ключа
      const nextKey = parts[i + 1];
      cur[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    cur = cur[key];
  }

  cur[parts[parts.length - 1]] = value;
}
