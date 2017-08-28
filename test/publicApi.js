import test from 'ava'
const Cryptopia = require('../')
const cryptopia = new Cryptopia('', '')

test('GetCurrencies', async t => {
  const res = await cryptopia.GetCurrencies()

  t.not(res, undefined)
  t.is(res.Success, true)
  t.is(res.Error, null)
})

test('GetTradePairs', async t => {
  const res = await cryptopia.GetTradePairs()

  t.not(res, undefined)
  t.is(res.Success, true)
  t.is(res.Error, null)
})

test('GetMarkets', async t => {
  const res = await cryptopia.GetMarkets('USDT', 12)

  t.not(res, undefined)
  t.is(res.Success, true)
  t.is(res.Error, null)
})

test('GetMarket', async t => {
  const res = await cryptopia.GetMarket('DOT_BTC', 12)

  t.not(res, undefined)
  t.is(res.Success, true)
  t.is(res.Error, null)
})

test('GetMarketHistory', async t => {
  const res = await cryptopia.GetMarketHistory('DOT_BTC', 48)

  t.not(res, undefined)
  t.is(res.Success, true)
  t.is(res.Error, null)
})

test('GetMarketOrders', async t => {
  const res = await cryptopia.GetMarketOrders('DOT_BTC', 50)

  t.not(res, undefined)
  t.is(res.Success, true)
  t.is(res.Error, null)
})

test('GetMarketOrderGroups', async t => {
  const res = await cryptopia.GetMarketOrderGroups('DOT_BTC-DOT_LTC-DOT_DOGE-DOT_UNO', 50)

  t.not(res, undefined)
  t.is(res.Success, true)
  t.is(res.Error, null)
})
