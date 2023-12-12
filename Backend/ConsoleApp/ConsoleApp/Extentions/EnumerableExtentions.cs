public static class EnumerableExtentions
{
    public static void WriteInstancesToDisk(this IEnumerable<Vehicle> instances, string filePath)
    {
        using (StreamWriter writer = new StreamWriter(filePath))
        {
            foreach (var instance in instances)
            {
                writer.WriteLine(instance.GetVehicleInfo());
            }
        }
    }
}
