//Listen for drop-down changes
$(".browser-default").on('change',function(){
  if (this.value === "Metric") {
    $(".selector").html('<div class="row justify-content-center"><label>Height</label></div><div class="form-group row justify-content-center"><input type="number" class="form-control" name="meters" placeholder="Meters (m)" required></div><div class="row justify-content-center"><label>Weight</label></div><div class="form-group row justify-content-center"><input type="number" class="form-control" name="kilograms" placeholder="Kilograms (kg)" required></div>');
  } else if (this.value === "Imperial") {
    $(".selector").html('<div class="row justify-content-center"><label>Height</label></div><div class="form-group row justify-content-center"><input type="number" class="form-control col-lg-6" name="feet" placeholder="Feet (ft)" required><input type="number" class="form-control col-lg-6" name="inches" placeholder="Inches (in)" required></div><div class="row justify-content-center"><label>Weight</label></div><div class="form-group row justify-content-center"><input type="number" class="form-control weightInput" name="pounds" placeholder="Pounds (lb)" required></div>');
  }
});
