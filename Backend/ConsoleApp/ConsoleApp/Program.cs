Task_1();
Task_2();
Task_3();
Task_4();

Console.ReadKey();

void Task_1()
{
    Car myCar = new Car
    {
        Make = "Toyota",
        Model = "Camry",
        Year = 2022,
        NumberOfDoors = 4
    };
    Bicycle myBicycle = new Bicycle
    {
        Make = "Mountain Bike",
        Model = "Blue",
        WheelSize = 26
    };
    Motorcycle myMotorcycle = new Motorcycle
    {
        Make = "Harley Davidson",
        Model = "Sportster",
        Year = 2023,
        Type = "Cruiser"
    };

    Console.WriteLine("Car Information:");
    Console.WriteLine(myCar.GetVehicleInfo());

    Console.WriteLine("\nBicycle Information:");
    Console.WriteLine(myBicycle.GetVehicleInfo());

    Console.WriteLine("\nMotorcycle Information:");
    Console.WriteLine(myMotorcycle.GetVehicleInfo());

    Console.WriteLine();
}

void Task_2()
{
    InstanceService instanceService = new InstanceService();

    IEnumerable<Vehicle> vehicleInstances = instanceService.GetInstances<Vehicle>();

    foreach (var vehicle in vehicleInstances)
    {
        Console.WriteLine(vehicle.GetVehicleInfo());
    }

    Console.WriteLine();

    
}

void Task_3()
{
    InstanceService instanceService = new InstanceService();

    IEnumerable<Vehicle> vehicleInstances = instanceService.GetInstances<Vehicle>();

    var typeNames = vehicleInstances.Select(instance => instance.GetType().Name).OrderBy(name => name);

    Console.WriteLine("Vehicle Type Names (Sorted Alphabetically):");
    foreach (var typeName in typeNames)
    {
        Console.WriteLine(typeName);
    }

    Console.WriteLine();

    vehicleInstances.WriteInstancesToDisk("vehicle_instances.txt");

    Console.WriteLine("Instances written to disk successfully.");

    Console.WriteLine();
}

void Task_4()
{
    string originalString = "Hello, World!";
    string reversedString = originalString.ReverseString();

    Console.WriteLine($"Original String: {originalString}");
    Console.WriteLine($"Reversed String: {reversedString}");

    string palindromeString = "level";
    bool isPalindrome = palindromeString.IsPalindrome();

    Console.WriteLine($"Is '{palindromeString}' a palindrome? {isPalindrome}");

    Console.WriteLine();

    int[] arr1 = { 4, 6, 9 };
    arr1.DisplayMissingElements();

    int[] arr2 = { 2, 3, 4 };
    arr2.DisplayMissingElements();

    int[] arr3 = { 1, 3, 4 };
    arr3.DisplayMissingElements();

}