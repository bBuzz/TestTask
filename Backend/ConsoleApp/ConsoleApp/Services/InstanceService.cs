using System.Reflection;

public class InstanceService
{
    public IEnumerable<T> GetInstances<T>()
    {
        var types = Assembly.GetExecutingAssembly().GetTypes()
            .Where(type => typeof(T).IsAssignableFrom(type) && !type.IsAbstract && type.IsClass);

        foreach (var type in types)
        {
            T? instance = default;

            try
            {
                if (type.GetConstructor(Type.EmptyTypes) != null)
                {
                    instance = (T?)Activator.CreateInstance(type);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating instance of type {type.FullName}: {ex.Message}");
            }

            if (instance != null)
            {
                yield return instance;
            }
        }
    }
}
