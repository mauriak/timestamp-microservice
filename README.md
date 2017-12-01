# Timestamp Microservice API

Returns unix epoch time and the natural date from a date string in the URL

## Example usage

`https://timestamp-microserver1.glitch.me/12-21-2012`

`https://timestamp-microserver1.glitch.me/December%2012,%202012`

## Example output
```
{
  "unix"    : 1356028200000,
  "natural" : "December 21, 2012"
}
```