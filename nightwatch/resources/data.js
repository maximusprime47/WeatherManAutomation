let invalid = {
    zip: 8675309, 
    city: 'Jenny Dont Change Your Number, I need to make you mine!!!!!@@@@$$$$$'
}

let valid = {
    zip: 84113, 
    city: 'Salt Lake City'
}

let empty = {
    zip: '', 
    city: ''
}

module.exports = {
    invalid: invalid, 
    valid: valid, 
    empty: empty
}