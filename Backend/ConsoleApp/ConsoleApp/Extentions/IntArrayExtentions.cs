public static class IntArrayExtentions
{
    public static void DisplayMissingElements(this int[] arr)
    {
        IEnumerable<int> missingElements = arr.MissingElementsFast();

        Console.WriteLine($"Input array: [{string.Join(", ", arr)}]");
        Console.WriteLine($"Missing elements: [{string.Join(", ", missingElements)}]");
        Console.WriteLine();
    }

    private static IEnumerable<int> MissingElementsFast(this int[] arr)
    {
        if (arr.Length == 0)
           yield break;

        int expected = arr[0];

        for (int i = 1; i < arr.Length;)
        {
            if (arr[i] > ++expected)
            {
                yield return expected;
                continue;
            }
            i++;
        }
    }
}