---
title: ""
date: 2019-01-09T22:59:52+03:00
# draft: true
---

```swift
enum Rank: Int {
  case ace = 1
  case one, two, three, four, five
  case king, queen, bishop

  func simpleDescription() -> String {
    switch self {
      case .ace: return "Ace"
      case .king: return "King"
      case .queen: return "Queen"
      case .bishop: return "Bishop"
      default: return String(self.rawValue)
    }
  }
}


let ace = Rank.five
let result = ace.rawValue

print(result)

if let convertedRank = Rank(rawValue: 3) {
  let threeDescription = convertedRank.simpleDescription
}

// SUIT

enum Suit {
  case spades, hearts, diamonds, clubs
  
  func simpleDescription() -> String {
    switch self {
      case .spades: return "spades"
      case .hearts: return "hearts"
      case .diamonds: return "diamonds"
      case .clubs: return "clubs"
    }
  } 

  func color() -> String {
    switch self {
      case .spades, .clubs: return "black"
      case .hearts, .diamonds: return "red"
    }
  }
}

let hearts = Suit.hearts
let heartsDescription = hearts.simpleDescription()
let heartsColor = hearts.color()
print("Hearts description is \(heartsDescription), and their corresponding color is \(heartsColor)")

```
