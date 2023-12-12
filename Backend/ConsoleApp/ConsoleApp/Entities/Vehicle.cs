public abstract class Vehicle
{
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }

    public abstract string GetVehicleInfo();

}
