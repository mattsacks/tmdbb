// Join an array of strings together with "and"

export default function listify(list: string[], limit?: number) {
  if (limit) {
    limit = Math.min(limit, list.length);
  } else {
    limit = list.length;
  }

  if (limit === 1) {
    return list[0];
  }

  if (limit === 2) {
    return list.join(" and ");
  }

  return `${list.slice(0, limit - 1).join(", ")}, and ${list[limit - 1]}`;
}
