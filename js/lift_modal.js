(function ($) {
  Drupal.behaviors.lift_modal = {
    attach: function (context) {
      createModal();
    },
  };

  function createModal() {
    // Wait until Lift cookie has been created.
    if(typeof $.cookie('tc_ptid') === 'undefined'){
      setTimeout(createModal, 10);
      return;
    }

    $("body").append('<div id="lift-modal-container"><div class="lift-modal"><div class="lift-modal-title"></div><div class="lift-modal-image"></div><div class="lift-modal-email"></div><div class="lift-modal-id"></div><div class="lift-modal-engagement"></div><div class="lift-modal-first"></div><div class="lift-modal-last"></div><div class="lift-modal-persona"></div></div></div>');
    $(".lift-modal-id").html("ID: " + $.cookie('tc_ptid'));
    $(".lift-modal-engagement").html("Engagement Score: " + Drupal.settings.lift_modal.engagement);

    // if (name in Drupal.settings.lift_modal.email) {
    //   $(".lift-modal-title").html(Drupal.settings.lift_modal.name);
    // } else {
    //   $(".lift-modal-title").html( "<p>Unknown user</p>" );
    // }
    if ("image" in Drupal.settings.lift_modal) {
      $(".lift-modal-image").html('<img src="' + Drupal.settings.lift_modal.image + '">');
    }
    if ("email" in Drupal.settings.lift_modal) {
      $(".lift-modal-email").html("Email: " + Drupal.settings.lift_modal.email);
    }
    if ("name" in Drupal.settings.lift_modal) {
      $(".lift-modal-id").html("Name: " + Drupal.settings.lift_modal.name);
    }


    if ("first" in Drupal.settings.lift_modal) {
      var firstDate = new Date(Drupal.settings.lift_modal.first);
    } else {
      var firstDate = new Date.getTime();
    }

     var firstHour = firstDate.getHours();
     var firstMinute = firstDate.getMinutes();
     var firstDay = firstDate.getDay();
     var firstMonth = firstDate.getMonth();
     var firstYear = firstDate.getFullYear();
     $(".lift-modal-first").html("First visit: " + firstDay + "/" + firstMonth + "/" + firstYear + " " + firstHour + ":" + firstMinute);

    if ("last" in Drupal.settings.lift_modal) {
      var lastDate = new Date(Drupal.settings.lift_modal.last);
      } else {
      var lastDate = new Date.getTime();
    }
    var lastHour = lastDate.getHours();
    var lastMinute = lastDate.getMinutes();
    var lastDay = lastDate.getDay();
    var lastMonth = lastDate.getMonth();
    var lastYear = lastDate.getFullYear();
    $(".lift-modal-last").html("Latest visit: " + lastDay + "/" + lastMonth + "/" + lastYear + " " + lastHour + ":" + lastMinute);

    if ("persona" in Drupal.settings.lift_modal) {
      $(".lift-modal-persona").html("Persona: " + Drupal.settings.lift_modal.persona);
    }
  };

}(jQuery));
