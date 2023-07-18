export const mintNFT = `
import StepsListing from 0x01

transaction(step: String) {

  prepare(acct: AuthAccount) {}

  execute {
    StepsListing.addToArray(step: step)
  }
}
`