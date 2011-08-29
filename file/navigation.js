$(document).click(function(e) { 
    // Check for left button
    if (e.button == 0)
      nextStep();
    else
      prevStep();
});


$(document).mousewheel(function(event, delta) { 
  if (delta > 0)
    prevStep();
	else if (delta < 0) 
		nextStep();
});
				