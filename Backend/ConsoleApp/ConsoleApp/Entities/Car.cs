public class Car : Vehicle
{
    public int NumberOfDoors { get; set; }
    public uint MaxSpeed { get; }

    public Car()
    {
        MaxSpeed = 150;
    }

    public override string GetVehicleInfo()
    {
        return "This is a Car.";
    }
}