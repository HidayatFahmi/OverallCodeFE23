// Merge Object using  generic

function mergeThreeObjects<T, U, V>(obj1: T, obj2: U, obj3: V): T & U & V {
  return { ...obj1, ...obj2, ...obj3 };
}

const result = mergeThreeObjects(
  { name: "fahmi" },
  { age: 25 },
  { lulus: true }
);

console.log(result);
