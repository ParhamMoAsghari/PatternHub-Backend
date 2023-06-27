# الگوی فلای‌ویت (Flyweight Pattern)

### همچنین شناخته شده به عنوان:
- نگهدارنده (Repository)، کاهش حافظه (Memory Optimization)

### انگیزه (Motivation):
الگوی فلای‌ویت در نرم‌افزارها استفاده می‌شود وقتی که بخواهیم برای شیء‌هایی که مصرف حافظه بالایی دارند، حافظه را بهینه کنیم. این الگو به ما امکان می‌دهد تا اشیاء یکسان را با استفاده از به اشتراک گذاری مشترکی در حافظه ذخیره کنیم، به جای ایجاد شیء جدید برای هر بار استفاده.

### قابلیت‌استفاده (Applicability):
الگوی فلای‌ویت وقتی مناسب است که:
- برنامه شما شامل تعداد زیادی شیء است که مصرف حافظه آنها زیاد است.
- بیشتر از یک شیء می‌تواند با استفاده از مقادیر یکسان توصیف شود.
- برنامه نیاز به تعداد زیادی شیء است که قابلیت ساخت و انتزاعی دارند.

### ساختار (Structure):
الگوی فلای‌ویت شامل موارد زیر است:
- `Flyweight`: رابطی که مشخص‌کننده اطلاعات درونی و خارجی شیء‌های فلای‌ویت است.
- `ConcreteFlyweight`: شیءی که در آن اطلاعات درونی و خارجی آن به صورت کامل پیاده‌سازی شده است.
- `FlyweightFactory`: مدیریت کننده‌ای که شیء‌های فلای‌ویت را مدیریت و به صورت مناسب ایجاد و بازیابی می‌کند.
- `Client`: شیء‌هایی که از شیء‌های فلای‌ویت استفاده می‌کنند.

### شرکت‌کنندگان (Participants):
- `Flyweight`: رابطی که مشخص‌کننده اطلاعات درونی و خارجی شیء‌های فلای‌ویت است.
- `ConcreteFlyweight`: پیاده‌سازی کننده‌ی م

شخص‌کننده اطلاعات درونی و خارجی یک شیء فلای‌ویت.
- `FlyweightFactory`: مسئول ایجاد و مدیریت شیء‌های فلای‌ویت.
- `Client`: شیء‌هایی که از شیء‌های فلای‌ویت استفاده می‌کنند.

### همکاری (Collaborations):
- شیء‌های `Client` با استفاده از `FlyweightFactory` شیء‌های `ConcreteFlyweight` را ایجاد و بازیابی می‌کنند. در صورتی که یک `ConcreteFlyweight` در فلای‌ویت وجود داشته باشد، از آن استفاده می‌کند و در غیر این صورت آن را ایجاد می‌کند و در فلای‌ویت ثبت می‌کند.

### پیامدها (Consequences):
استفاده از الگوی فلای‌ویت دارای مزایا و معایب زیر است:
- **مزایا**:
    - کاهش مصرف حافظه به دلیل استفاده از به اشتراک گذاری شیء‌های یکسان.
    - امکان ایجاد تعداد زیادی شیء با حافظه محدود.
    - افزایش کارایی به دلیل استفاده از شیء‌های قابل بازیابی و قابل استفاده مجدد.

- **معایب**:
    - احتمال افزایش پیچیدگی کد به دلیل جداسازی اطلاعات درونی و خارجی شیء.
    - نیاز به مدیریت مناسب و هماهنگی بین `Flyweight` و `FlyweightFactory`.
    - عملیات‌هایی که وضعیت خارجی دارند، ممکن است منجر به تغییر وضعیت دیگر `Flyweight`ها شوند.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی فلای‌ویت را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Flyweight
public interface IFlyweight
{
    void Operation();
}

// ConcreteFlyweight
public class ConcreteFlyweight : IFlyweight
{
    private readonly string _intrinsicState;

    public ConcreteFlyweight(string intrinsicState)
    {
        _intrinsicState = intrinsicState;
    }

    public void Operation()
    {
        Console.WriteLine

("Intrinsic State: " + _intrinsicState);
    }
}

// FlyweightFactory
public class FlyweightFactory
{
    private readonly Dictionary<string, IFlyweight> _flyweights = new Dictionary<string, IFlyweight>();

    public IFlyweight GetFlyweight(string key)
    {
        if (!_flyweights.ContainsKey(key))
        {
            _flyweights[key] = new ConcreteFlyweight(key);
        }

        return _flyweights[key];
    }
}

// Client
public class Client
{
    private readonly FlyweightFactory _flyweightFactory;

    public Client(FlyweightFactory flyweightFactory)
    {
        _flyweightFactory = flyweightFactory;
    }

    public void DoWork(string key)
    {
        IFlyweight flyweight = _flyweightFactory.GetFlyweight(key);
        flyweight.Operation();
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
الگوی فلای‌ویت در زمینه‌هایی که مصرف حافظه بالا دارند و دارای اشیاء یکسانی هستند مانند مدیریت منابع گرافیکی در بازی‌ها، مدیریت قطعات نرم‌افزاری در سیستم‌های بزرگ، مدیریت حافظه در ویرایشگرهای متن و تولید گزارش‌ها و مستندات استفاده می‌شود.

### الگوهای مرتبط (Related Patterns):
- **Composite Pattern**: می‌توان از الگوی فلای‌ویت برای پیاده‌سازی عناصر ساختاری یک Composite Pattern استفاده کرد.
- **Decorator Pattern**: می‌توان الگوی فلای‌ویت را برای پیاده‌سازی دکوراتورها در الگوی Decorator استفاده کرد.