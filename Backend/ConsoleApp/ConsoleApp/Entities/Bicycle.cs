public class Bicycle : Vehicle
{
    public int WheelSize { get; set; }

    public override string GetVehicleInfo()
    {
        return "This is a Bicycle.";
    }
}
