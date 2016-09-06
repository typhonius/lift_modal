(function ($) {
  Drupal.behaviors.lift_modal = {
    attach: function (context) {
      createModal();
    },
  };

  function createModal() {
    $("body").append('<div id="lift-modal-container"><div class="lift-modal"><div class="lift-modal-title"></div><div class="lift-modal-image"></div><div class="lift-modal-email"></div><div class="lift-modal-id"></div><div class="lift-modal-engagement"></div><div class="lift-modal-first"></div><div class="lift-modal-last"></div><div class="lift-modal-persona"></div></div></div>');
    if (Drupal.settings.lift_modal.email) {
      $(".lift-modal-title").html( "<p>Identified user</p>" );
    } else {
      $(".lift-modal-title").html( "<p>Unknown user</p>" );
    }
    if (Drupal.settings.lift_modal.image) {
      $(".lift-modal-image").html('<img src="' + Drupal.settings.lift_modal.image + '">');
    }
    if (Drupal.settings.lift_modal.email) {
      $(".lift-modal-email").html("Email: " + Drupal.settings.lift_modal.email);
    }
    if (Drupal.settings.lift_modal.name) {
      $(".lift-modal-id").html("Name: " + Drupal.settings.lift_modal.name);
    }
    if (Drupal.settings.lift_modal.id) {
      $(".lift-modal-id").html("ID: " + Drupal.settings.lift_modal.id);
    }
    if (Drupal.settings.lift_modal.engagement > 0) {
      $(".lift-modal-engagement").html("Engagement Score: " + Drupal.settings.lift_modal.engagement);
    }
    if (Drupal.settings.lift_modal.first) {
      var firstDate = new Date(Drupal.settings.lift_modal.first);
      var firstHour = firstDate.getHours();
      var firstMinute = firstDate.getMinutes();
      var firstDay = firstDate.getDay();
      var firstMonth = firstDate.getMonth();
      var firstYear = firstDate.getFullYear();
      $(".lift-modal-first").html("First visit: " + firstDay + "/" + firstMonth + "/" + firstYear + " " + firstHour + ":" + firstMinute);
    }
    if (Drupal.settings.lift_modal.last) {
      var lastDate = new Date(Drupal.settings.lift_modal.last);
      var lastHour = lastDate.getHours();
      var lastMinute = lastDate.getMinutes();
      var lastDay = lastDate.getDay();
      var lastMonth = lastDate.getMonth();
      var lastYear = lastDate.getFullYear();
      $(".lift-modal-last").html("Latest visit: " + lastDay + "/" + lastMonth + "/" + lastYear + " " + lastHour + ":" + lastMinute);
    }
    if (Drupal.settings.lift_modal.persona) {
      $(".lift-modal-persona").html("Persona: " + Drupal.settings.lift_modal.persona);
    }
  };

}(jQuery));
