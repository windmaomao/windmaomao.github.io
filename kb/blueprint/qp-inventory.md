# Inventory 

## Models

### Category

- `title`
- `subtitle`
- `value`
- `url`
- `name`
  Unique identifier of category
- `toggled`
  Open children
- children
  Array of same node

### Trade

- `categories`
  [option], Category name array
- `title`
  Display name
- `subtitle`
  Second line, ex. model etc.
- `vendor`
  Factory identifier or account
- `serial`
  Unique identifier of vendor
- `type`
  Custom type of the trade
- `date`
  Date / time or one
- `price`
  Dollar amount
- `url`
  Link to this item
- `notes`
  Comments or summary
- `transactions`
  Itemized grannual level of tracking
  - `quantity`
    Number
  - `price`
    Dollar amount
  - `date`
    Date / time
  - notes
    Comments
