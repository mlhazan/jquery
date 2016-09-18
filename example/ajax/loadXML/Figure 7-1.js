$(document).ready(
    function() {
        $('select#hLocationCountryID').click(
            function() {
                //3 arguments of $.get(). it may have more which can be put between
                //first and second argument
                $.get('Figure 7-1 ' + this.value + '.xml',
                    //the following function will receive the xml file on the $xml
                    function($xml) {
                        // Make the XML query-able with jQuery
                        $xml = $($xml);

                        // Get the ISO2 value, that's used for the
                        // file name of the flag.
                        var $iso2 = $xml.find('hLocationCountryISO2').text();

                        // Swap out the flag image
                        $('#country').attr(
                            'src',
                            'Images/Flags/' + $iso2.toLowerCase() + '.png'
                        );

                        // Remove all of the options
                        $('select#hLocationStateID').empty();

                        // Set the states...
                        $xml.find('hLocationState').each(
                            function() {
                                $('select#hLocationStateID').append(
                                    "<option value=" + $(this).attr('hLocationStateID') + ">" +
                                    $(this).text() +
                                    "</option>"
                                );
                            }
                        );

                        // Change the label
                        $('label[for=hLocationStateID]').text(
                            $xml.find('hLocationStateLabel').text() + ':'
                        );
                    },
                    'xml'
                );
            }
        );
    }
);
