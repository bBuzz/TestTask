public static class StringExtentions
{
    public static string ReverseString(this string s)
    {
        char[] charArray = s.ToCharArray();

        int start = 0;
        int end = s.Length - 1;

        while (start < end)
        {
            char temp = charArray[start];
            charArray[start] = charArray[end];
            charArray[end] = temp;

            start++;
            end--;
        }

        return new string(charArray);
    }

    public static bool IsPalindrome(this string s)
    {
        string cleanedString = new string(s.ToLower().ToCharArray().Where(c => Char.IsLetterOrDigit(c)).ToArray());

        int start = 0;
        int end = cleanedString.Length - 1;

        while (start < end)
        {
            if (cleanedString[start] != cleanedString[end])
            {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}
