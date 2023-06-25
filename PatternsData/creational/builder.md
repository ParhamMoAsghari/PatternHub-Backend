# الگوی Builder

الگوی Builder یک الگوی طراحی ایجادی است که به شما امکان می دهد یک شیء پیچیده را مرحله به مرحله ساخت کنید. این الگو ساخت یک شیء را از نمایش آن جدا می کند و اجازه می دهد فرآیند ساخت یک نمایش متفاوت از آن را داشته باشید.

## مثال: ساخت خودرو

فرض کنید می خواهیم یک شیء `Car` که شامل ویژگی های مختلفی مانند مدل، رنگ، نوع موتور و تعداد درها است را بسازیم. می توانیم از الگوی Builder برای ساخت شیء `Car` به صورت انعطاف پذیر و کنترل شده استفاده کنیم.

اولاً، بیایید کلاس `Car` و ویژگی های آن را تعریف کنیم:

```csharp
public class Car
{
    public string Model { get; set; }
    public string Color { get; set; }
    public string EngineType { get; set; }
    public int NumDoors { get; set; }
}
```

سپس، یک کلاس سازنده جداگانه به نام `CarBuilder` ایجاد می کنیم که فرآیند ساخت را مدیریت می کند:

```csharp
public class CarBuilder
{
    private Car car;

    public CarBuilder()
    {
        car = new Car();
    }

    public CarBuilder SetModel(string model)
    {
        car.Model = model;
        return this;
    }

    public CarBuilder SetColor(string color)
    {
        car.Color = color;
        return this;
    }

    public CarBuilder SetEngineType(string engineType)
    {
        car.EngineType = engineType;
        return this;
    }

    public CarBuilder SetNumDoors(int numDoors)
    {
        car.NumDoors = numDoors;
        return this;
    }

    public Car Build()
    {
        return car;
    }
}
```

در کلاس `CarBuilder`، متد هایی برای تنظیم هر ویژگی شیء `Car` تعریف شده است. هر متد مقدار مربوطه را تنظیم کرده و نمونه سازی از خود کلاس سازنده را برمی گرداند که امکان پیوند کردن متدها را فراهم می کند.

متد `Build

()` شیء `Car` ساخته شده را برمی گرداند.

حالا، از سازنده برای ساخت یک شیء `Car` استفاده می کنیم:

```csharp
CarBuilder builder = new CarBuilder();
Car car = builder.SetModel("Sedan")
                  .SetColor("Red")
                  .SetEngineType("Gasoline")
                  .SetNumDoors(4)
                  .Build();

Console.WriteLine(car.Model);           // Output: Sedan
Console.WriteLine(car.Color);           // Output: Red
Console.WriteLine(car.EngineType);      // Output: Gasoline
Console.WriteLine(car.NumDoors);        // Output: 4
```

در کد بالا، یک نمونه از `CarBuilder` ایجاد می کنیم و متدهای سازنده را به صورت زنجیره ای برای تنظیم ویژگی های مورد نظر خودرو استفاده می کنیم. در نهایت، متد `Build()` را فراخوانی می کنیم تا شیء `Car` ساخته شده را دریافت کنیم.

با استفاده از الگوی Builder، می توانیم به راحتی ویژگی های شیء `Car` را به دلخواه تنظیم کنیم بدون ایجاد اشغال در سازنده یا ایجاد چندین سازنده با مقادیر پیش فرض مختلف. علاوه بر این، بر روی فرآیند ساخت مراقبت داریم و می توانیم ویژگی های مورد نیاز را اجبار کنیم.

الگوی Builder به ویژه زمانی که با شیء های پیچیده که نیاز به فرآیند ساخت مرحله به مرحله یا پارامترهای اختیاری دارند، سروکار دارد. این الگو یک راه روشن و انعطاف پذیر برای ساخت شیء فراهم می کند که قابلیت خوانایی و قابلیت نگهداری کد را افزایش می دهد.