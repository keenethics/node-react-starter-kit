# Error handling

This is a document how we most work with **Error** on current project.

For correct works with **Error** in project please read [this article](https://expressjs.com/en/guide/error-handling.html) and use `Kit.CustomError` as `Error` object

Example of handling:

```js
router.get('/error', (req, res, next) => {
  try {
    // ...some code
  } catch(e) {
    next(new Kit.CustomError('UNAUTHORIZED_ACCESS', 401));
  }
});
```

## Error structure

This structure you must send to client when error is happened and you can get this structure from `Kit.CustomError` by `.get()` method

```js
{
  "errors": [
    {
      "parameter": "start_time",
      "details": "invalid date",
      "code": "INVALID_PARAMETER",
      "value": "",
      "message": "Expected time, got \"\" for start_time",
      "userMessage": "Expected time, got \"\" for start_time"
    }
  ],
  "request": {
    "params": {
      "account_id": "hkk5"
    }
  },
  "metadata": {}
}
```

## Error codes & what they mean

<table>
  <thead>
    <tr>
      <th>HTTP Code</th>
      <th>Error Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>403</td>
      <td>ACCOUNT_NOT_FOUND</td>
    </tr>
    <tr>
      <td>403</td>
      <td>ACTION_NOT_ALLOWED</td>
    </tr>
    <tr>
      <td>400</td>
      <td>EXCLUSIVE_PARAMETERS</td>
    </tr>
    <tr>
      <td>400</td>
      <td>FEATURE_NOT_AVAILABLE</td>
    </tr>
    <tr>
      <td>400</td>
      <td>ILLEGAL_CHARACTERS</td>
    </tr>
    <tr>
      <td>500</td>
      <td>INTERNAL_ERROR</td>
    </tr>
    <tr>
      <td>400</td>
      <td>INVALID_PARAMETER</td>
    </tr>
    <tr>
      <td>400</td>
      <td>INVALID_USER</td>
    </tr>
    <tr>
      <td>400</td>
      <td>INVALID_USER_ID</td>
    </tr>
    <tr>
      <td>400</td>
      <td>MISSING_PARAMETERS</td>
    </tr>
    <tr>
      <td>404</td>
      <td>NOT_FOUND</td>
    </tr>
    <tr>
      <td>400</td>
      <td>REQUEST_TOO_COMPLEX</td>
    </tr>
    <tr>
      <td>404</td>
      <td>ROUTE_NOT_FOUND</td>
    </tr>
    <tr>
      <td>503</td>
      <td>SERVICE_UNAVAILABLE</td>
    </tr>
    <tr>
      <td>503</td>
      <td>OVER_CAPACITY</td>
    </tr>
    <tr>
      <td>429</td>
      <td>TOO_MANY_REQUESTS</td>
    </tr>
    <tr>
      <td>401</td>
      <td>UNAUTHORIZED_ACCESS</td>
    </tr>
    <tr>
      <td>403</td>
      <td>USER_NOT_FOUND</td>
    </tr>
  </tbody>
</table>
