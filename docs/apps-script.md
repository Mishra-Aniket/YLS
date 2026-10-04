# Google Apps Script — Quote / Contact Form Handler

Deploy this as a Web App (Execute as: Me, Access: Anyone).

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Quotes') || ss.insertSheet('Quotes');

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'ID', 'Name', 'Email', 'Phone', 'Freight Type',
        'Goods Type', 'Pickup City', 'Delivery City',
        'Dimensions', 'Shipment Date', 'Notes', 'Submitted At'
      ]);
    }

    sheet.appendRow([
      data.id || '',
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.freightType || '',
      data.goodsType || '',
      data.pickupCity || '',
      data.deliveryCity || '',
      data.dimensions || '',
      data.shipmentDate || '',
      data.notes || '',
      data.createdAt || new Date().toISOString()
    ]);

    // Send email notification
    MailApp.sendEmail({
      to: 'ylspune@gmail.com',
      subject: 'New Quote Request: ' + (data.fullName || 'Unknown'),
      htmlBody: '<h2>New Quote Request</h2>' +
        '<p><strong>Name:</strong> ' + (data.fullName || '') + '</p>' +
        '<p><strong>Phone:</strong> ' + (data.phone || '') + '</p>' +
        '<p><strong>Email:</strong> ' + (data.email || '') + '</p>' +
        '<p><strong>Freight:</strong> ' + (data.freightType || '') + '</p>' +
        '<p><strong>Route:</strong> ' + (data.pickupCity || '') + ' → ' + (data.deliveryCity || '') + '</p>' +
        '<p><strong>Notes:</strong> ' + (data.notes || '') + '</p>' +
        '<p><strong>ID:</strong> ' + (data.id || '') + '</p>'
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', id: data.id }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Steps
1. Go to [Google Apps Script](https://script.google.com) and create a new project.
2. Paste the code above.
3. Deploy → New deployment → Web app → Execute as: Me, Access: Anyone.
4. Copy the deployment URL and set it as `NEXT_PUBLIC_FORM_URL` in your `.env`.
