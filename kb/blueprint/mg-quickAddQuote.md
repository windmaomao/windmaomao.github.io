# Quick Add Quote Form

## Services

### getDefaultState

- `stops`
  Array
  - Location('pickup')
    - `type`
    - `location`
      - `locationCode`
      - `name`
      - `type`
      - `addresses`
      - `address1`
      - `address2`
      - `city`*
      - `state`
      - `country`
      - `postalCode`*
      - `latitude`
      - `longitude`
      - `comments`
      - `contact`
        - `name`
        - `phone`
        - `email`
        - `fax`
    - `uniqueId`
    - `references`
      Array
    - `date`
      - `startDate`
      - `startTime`
        '00:00'
      - `endTime`
    - `services`
      Array
  - Location('drop')
- `items`
- `references`

### initialConstraints

- `stops`
  - *
    - `location`
      - `city`
        required
      - `region`
        required
      - `postalCode`
        required

### QuickAddQuoteStore

- values
  - 