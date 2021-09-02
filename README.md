# datedfile

## Features

Create a new markdown file for today in `datedfile.directory` directory.

## Requirements

None.

## Extension Settings

* `datedfile.date_format`: string format for filename, default `YYYY-MM-DD-dddd` (e.g. `2021-01-01-Friday`)
* `datedfile.header_format`: string format for filename, default `YYYY-MM-DD dddd` (e.g. `2021-01-01 Friday`)
* `datedfile.directory`: path to logbook directory

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Initial version.

Create a file based on todays' date, using `datedfile.date_format` for filename and insert a header of `datedfile.header_format`. Currently only exposes `Today's Logbook` command.
