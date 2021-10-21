module.exports = function setRequestData(key, ...reqData) {
  return function(req, res, next) {
    if (req.data === undefined) {
      req.data = {  
        incoming: {},
        result: {},
      }
    }
    if (req.data.incoming[key] === undefined) {
      req.data.incoming[key] = {}
    }
    for (const i in reqData) {
      if (req.body[reqData[i]] !== undefined) {
        req.data.incoming[key][reqData[i]] = req.body[reqData[i]]
      }
    }
    next()
  }
}