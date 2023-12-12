public class Motorcycle : Vehicle
{
    public string? Type { get; set; }
    public uint MaxSpeed { get; }

    public Motorcycle()
    {
        MaxSpeed = 320;
    }

    public override string GetVehicleInfo()
    {
        return "This is a Motorcycle.";
    }
}