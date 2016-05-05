(function() {

  // Amilia API Helpers. Copyright 2016 Amilia.
  // https://github.com/AmiliaApp/amilia-demo-organization

  // Dependencies:
  //   - jQuery (https://jquery.com/)
  //   - Moment.js (http://momentjs.com/)
  //   - Underscore.js (http://underscorejs.org/)


  // Private
  var apiUrl = 'https://www.amilia.com/PublicApi/';
  function tagUrl(rewriteUrl, lang) {
    return apiUrl + '{RewriteUrl}/{Lang}/Tags'
      .replace('{RewriteUrl}', rewriteUrl)
      .replace('{Lang}', lang);
  }
  function activitesUrl(rewriteUrl, lang, tagId) {
    return apiUrl + '{RewriteUrl}/{Lang}/Tags/{Id}/Activities'
      .replace('{RewriteUrl}', rewriteUrl)
      .replace('{Lang}', lang)
      .replace('{Id}', tagId);
  }
  function onError(error) {
    console.log(error);
  }

  function renderTableOfActivities(activities, $table) {
      $table.html([
        '<thead>',
        '  <tr>',
        '    <th>Name</th>',
        '    <th>Location</th>',
        '    <th>When</th>',
        '    <th>Price</th>',
        '    <th>Spots available</th>',
        '    <th></th>',
        '  </tr>',
        '</thead>',
        '<tbody></tbody>'
      ].join('\n'));

      var template = _.template([
        '<tr>',
        '  <td><%=name%></td>',
        '  <td><%=location%></td>',
        '  <td><%=when%></td>',
        '  <td><%=price%></td>',
        '  <td><%=spots%></td>',
        '  <td><a href="<%=url%>" class="btn btn-primary btn-sm">Register</a></td>',
        '</tr>'
      ].join('\n'));

    _.each(activities, function(activity) {
      var start = activity.Schedule.TimePeriod.StartDate.replace('00:00:00', activity.Schedule.TimePeriod.StartTime),
        data = {
          name: activity.Name,
          location: activity.Location,
          when: moment(start).format('h:mm a'),
          price: activity.Price + ' $',
          spots: activity.NbPlacesLeft == null ? 'no limit' : activity.NbPlacesLeft,
          url: activity.Url
        };
      $table.find('tbody').append(template(data));
    });
  }


  // Public function
  function buildTable(rewriteUrl, lang, tagName, tableElement) {
    var $table = $(tableElement);
    if ($table.length == 0) return onError('Cannot find table element "' + tableElement + '"');

    $.get(tagUrl(rewriteUrl, lang))
      .done(function(tags) {
        var tag = _.findWhere(tags, {Name: tagName});
        if (!tag) return onError('Cannot find a tag named "' + tagName + '"');

        $.get(activitesUrl(rewriteUrl, lang, tag.Id))
          .done(function(activities) {
            renderTableOfActivities(activities, $table);
          })
          .fail(onError)
      })
      .fail(onError);
  }

  // Expose to global namespace
  window.AMILIA = {
    buildTable: buildTable
  };

}).call(this);