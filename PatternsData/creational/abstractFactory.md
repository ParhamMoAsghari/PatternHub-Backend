# الگوی Abstract Factory (کارخانه انتزاعی)

### همچنین شناخته شده به عنوان:
- کارخانه مجرد

### انگیزه:
الگوی Abstract Factory برای ایجاد یک خانواده از اشیاء مرتبط با یکدیگر بدون نیاز به آگاهی از نوع دقیق اشیاء استفاده می‌شود. این الگو به کاربر این امکان را می‌دهد تا با استفاده از یک رابط انتزاعی اشیاء را ایجاد کند، بدون این که بداند اشیاء واقعی کدامند.

### قابلیت استفاده:
الگوی Abstract Factory مناسب است وقتی که:
- بخواهیم خانواده‌ای از اشیاء مرتبط را ایجاد کنیم و بخواهیم از جزئیات پیاده‌سازی آن خانواده جدا باشیم.
- بخواهیم کد مشترکی را بین اشیاء مرتبط در خانواده به اشتراک بگذاریم.
- بخواهیم تغییر در خانواده اشیاء را انجام دهیم، بدون تغییر کد کاربری آنها.

### ساختار:
الگوی Abstract Factory شامل موارد زیر است:
- `AbstractFactory`: رابطی است که تعیین کننده خانواده اشیاء است و متدهای ایجاد اشیاء را تعریف می‌کند.
- `ConcreteFactory`: پیاده‌سازی‌های واقعی از `AbstractFactory` که اشیاء خانواده را ایجاد می‌کنند.
- `AbstractProduct`: رابطی است که اجزای خانواده اشیاء را تعریف می‌کند.
- `ConcreteProduct`: پیاده‌سازی‌های واقعی از `AbstractProduct` که اشیاء واقعی را ایجاد می‌کنند.
- `Client`: کلاسی است که از رابط `AbstractFactory` و `AbstractProduct` برای ایجاد اشیاء استفاده می‌کند.

### شرکت‌کنندگان:
- `AbstractFactory`: رابطی که تعیین کننده خانواده اشیاء است و متدهای ایجاد اشیاء را تعریف

می‌کند.
- `ConcreteFactory`: پیاده‌سازی‌های واقعی از `AbstractFactory` که اشیاء خانواده را ایجاد می‌کنند.
- `AbstractProduct`: رابطی که اجزای خانواده اشیاء را تعریف می‌کند.
- `ConcreteProduct`: پیاده‌سازی‌های واقعی از `AbstractProduct` که اشیاء واقعی را ایجاد می‌کنند.
- `Client`: کلاسی که از رابط `AbstractFactory` و `AbstractProduct` برای ایجاد اشیاء استفاده می‌کند.

### همکاری:
- `AbstractFactory` با استفاده از `ConcreteFactory` اشیاء مرتبط را ایجاد می‌کند.
- `AbstractProduct` با استفاده از `ConcreteProduct` اجزای واقعی اشیاء را تعریف می‌کند.

### پیامدها:
استفاده از الگوی Abstract Factory دارای مزایا و معایب زیر است:
- **مزایا**:
    - قابلیت تغییر خانواده اشیاء بدون تغییر کد کاربری.
    - کد مشترک بین اشیاء مرتبط را به اشتراک می‌گذارد.
    - جداسازی کد کاربری از جزئیات پیاده‌سازی.

- **معایب**:
    - افزایش پیچیدگی کد به دلیل ایجاد انواع جدید اشیاء و خانواده‌ها.
    - ممکن است باعث ایجاد تعداد زیادی کلاس و رابط شود.

### پیاده‌سازی:
در زبان برنامه‌نویسی C#، می‌توانیم الگوی Abstract Factory را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Abstract Product
public interface IProduct
{
    void Operation();
}

// Concrete Products
public class ConcreteProductA : IProduct
{
    public void Operation()
    {
        Console.WriteLine("ConcreteProductA Operation");
    }
}

public class ConcreteProductB : IProduct
{
    public void Operation()
    {
        Console.WriteLine("ConcreteProductB Operation");
    }
}

// Abstract Factory
public interface IFactory
{
    IProduct CreateProduct();
}

// Concrete Factories
public class ConcreteFactoryA : IFactory
{
    public IProduct CreateProduct()
    {
        return new ConcreteProductA();
    }
}

public class ConcreteFactoryB : IFactory
{
    public IProduct CreateProduct()
    {
        return new ConcreteProductB();
    }
}

// Client
public class Client
{
    private readonly IFactory _factory;
   

 private readonly IProduct _product;

    public Client(IFactory factory)
    {
        _factory = factory;
        _product = factory.CreateProduct();
    }

    public void Run()
    {
        _product.Operation();
    }
}
```

### استفاده‌های شناخته شده:
استفاده از الگوی Abstract Factory در فریم‌ورک‌های بسیاری مانند .NET و WPF وجود دارد. برای مثال، در WPF، `AbstractFactory` به نام `DataTemplateSelector` استفاده می‌شود که برای انتخاب قالب‌های UI مرتبط با نوع داده استفاده می‌شود.

### الگوهای مرتبط:
- **Factory Method Pattern**: Factory Method Pattern مشابه الگوی Abstract Factory است، اما تنها یک نمونه از محصول را ایجاد می‌کند، در حالی که Abstract Factory مجموعه‌ای از محصولات را ایجاد می‌کند.
- **Builder Pattern**: Builder Pattern برای ساختن شیء پیچیده استفاده می‌شود و مراحل ساخت را کنترل می‌کند. در حالی که Abstract Factory فقط بر روی ایجاد شیء تمرکز دارد.
- **Singleton Pattern**: در برخی از پیاده‌سازی‌های الگوی Abstract Factory، ممکن است از Singleton Pattern برای ایجاد یک نمونه تک از کارخانه استفاده شود.