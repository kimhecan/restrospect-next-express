export function classify(postCount) {
  if (postCount < 10) {
    return '초보'
  } else if (postCount < 50) {
    return '중수'
  } else if (postCount < 100) {
    return '고수'
  } else {
    return '마스터'
  }
}

export function classifyColor(postCount) {
  if (postCount < 10) {
    return '#191919'
  } else if (postCount < 50) {
    return '#050099'
  } else if (postCount < 100) {
    return '#1DDB16'
  } else {
    return '#FFE400'
  }
}