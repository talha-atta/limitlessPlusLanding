// Send event to user actions table
function sendEvent(action, item) {
	mixpanel.track(action, { 
        "Item": item
    });

	$.ajax({
        type: "POST",
        url: "/users/userAction/",
        data: {
            'action': action,
            'item': item,
            'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val()
        }
    }); 
}

// Wrapper function for sendEvent
function sendAction(action, item) {
    sendEvent(action, item)
}

// Send action to GTM and to db
function sendGTM(g_category, g_action, g_label) {
    data_layer_tag = g_category.concat("_").concat(g_action).toLowerCase()
    data_to_push= {'event_category': g_category,
                    'event_action': g_action,
                    'event_label': g_label,
                    'event': data_layer_tag,
                }

    data_to_push[data_layer_tag] = g_label
    dataLayer.push(data_to_push);

    sendAction(g_category + " " + g_action, g_label)
}

// Track action with value
function sendGTM_w_value(g_category, g_action, g_label, g_value) {
    data_layer_tag = g_category.concat("_").concat(g_action).toLowerCase()
    data_to_push= {'event_category': g_category,
                    'event_action': g_action,
                    'event_label': g_label,
                    'event': data_layer_tag,
                    'event_value': g_value
                }

    data_to_push[data_layer_tag] = g_label
    dataLayer.push(data_to_push);

    sendAction(g_category + " " + g_action, g_label + " " + String(g_value))
}