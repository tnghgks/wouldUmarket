export function uniqueById(arr) {
  return arr.filter(
    (user, index, callback) => index === callback.findIndex((item) => item._id === user._id)
  );
}
