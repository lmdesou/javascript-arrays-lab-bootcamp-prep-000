const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

//changes array
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name)
