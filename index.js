const rp = require('request-promise')

class Cryptopia {
  constructor (key, secret) {
    this.key = key
    this.secret = secret
    this.API_URL = 'https://www.cryptopia.co.nz/api/'
  }

  _public (endpoint, parameters) {
    let httpParam = '/'
    for (let key in parameters) {
      if (parameters[key]) {
        httpParam += parameters[key] + '/'
      }
    }
    const options = {
      method: 'GET',
      uri: this.API_URL + endpoint + httpParam,
      json: true
    }

    return rp(options)
  }

  async GetCurrencies () {
    return this._public('GetCurrencies')
  }

  async GetTradePairs () {
    return this._public('GetTradePairs')
  }

  async GetMarkets (baseMarket, hours) {
    return this._public('GetMarkets', {baseMarket, hours})
  }

  async GetMarket (market, hours) {
    return this._public('GetMarket', {market, hours})
  }

  async GetMarketHistory (market, hours) {
    return this._public('GetMarketHistory', {market, hours})
  }

  async GetMarketOrders (market, orderCount) {
    return this._public('GetMarketOrders', {market, orderCount})
  }

  async GetMarketOrderGroups (markets, orderCount) {
    return this._public('GetMarketOrderGroups', {markets, orderCount})
  }
}

module.exports = Cryptopia
