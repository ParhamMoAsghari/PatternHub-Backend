# الگوی Bridge (الگوی پل)

### همچنین شناخته شده به عنوان:
- الگوی پل (Bridge Pattern)

### انگیزه (Motivation):
الگوی Bridge معمولاً زمانی استفاده می‌شود که بخواهیم دو شاخص از یک ساختار را از یکدیگر جدا کنیم، به طوری که تغییر در یکی از این شاخص‌ها تأثیری در دیگری نداشته باشد. این الگو برای جدا کردن تبعیت از یک رابطه از امکانات آن استفاده می‌کند.

### قابلیت‌استفاده (Applicability):
الگوی Bridge وقتی مناسب است که:
- می‌خواهید ارتباط بین یکی از مولفه‌های ساختار و یک مولفه دیگر را جدا کنید.
- می‌خواهید امکانات متعددی را در هر یک از مولفه‌ها پیاده‌سازی کنید و قابلیت ترکیب این امکانات را فراهم کنید.

### ساختار (Structure):
الگوی Bridge شامل موارد زیر است:
- **Abstraction (Abstract):** رابطه‌ای که با آن کاربران ارتباط برقرار می‌کنند. این کلاس برای پیاده‌سازی قابل تغییر است و به یک شیء از Implementor ارجاع می‌دهد.
- **Refined Abstraction (Concrete):** پیاده‌سازی Abstraction است که از ویژگی‌های مشخص خود برای کاربری خاص استفاده می‌کند.
- **Implementor (Abstract):** رابطه‌ای که برای پیاده‌سازی توسط Concrete Implementor ارائه می‌شود.
- **Concrete Implementor (Concrete):** پیاده‌سازی کننده واقعی Implementor است که امکانات مشخصی را برای Abstraction ارائه می‌دهد.

### شرکت‌کنندگان (Participants):
- **Abstraction (Abstract):** رابطی که برای کاربران ارائه می‌شود و با رابط Implementor همکاری می‌کند.
- **Refined Abstraction (Concrete):** پیاده‌سازی Abstraction است که

از ویژگی‌های مشخص خود برای کاربری خاص استفاده می‌کند.
- **Implementor (Abstract):** رابطی که برای پیاده‌سازی توسط Concrete Implementor ارائه می‌شود.
- **Concrete Implementor (Concrete):** پیاده‌سازی کننده واقعی Implementor است که امکانات مشخصی را برای Abstraction ارائه می‌دهد.

### همکاری (Collaborations):
- Abstraction با استفاده از رابط Implementor با Concrete Implementor همکاری می‌کند. Abstraction متد‌های خود را فراخوانی می‌کند و Implementor را فراخوانی می‌کند تا عملیات مربوطه را انجام دهد.

### پیامدها (Consequences):
استفاده از الگوی Bridge دارای مزایا و معایب زیر است:
- **مزایا:**
    - اجزای سازمانی را از اجزای عملیاتی جدا می‌کند.
    - امکان تغییر و بهبود را فراهم می‌کند بدون تغییر در ساختار اصلی.
    - کاهش وابستگی بین مولفه‌های مختلف ساختار.

- **معایب:**
    - افزایش پیچیدگی در طراحی و پیاده‌سازی ممکن است.
    - افزایش تعداد کلاس‌ها و رابطه‌ها در ساختار برنامه.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی Bridge را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Implementor
public interface IImplementor
{
    void OperationImp();
}

// Concrete Implementor
public class ConcreteImplementorA : IImplementor
{
    public void OperationImp()
    {
        Console.WriteLine("ConcreteImplementorA: OperationImp called");
    }
}

// Abstraction
public abstract class Abstraction
{
    protected IImplementor _implementor;

    public Abstraction(IImplementor implementor)
    {
        _implementor = implementor;
    }

    public abstract void Operation();
}

// Refined Abstraction
public class RefinedAbstraction : Abstraction
{
    public RefinedAbstraction(IImplementor implementor) : base(implementor)
    {
    }

    public override void Operation()
    {
        Console.WriteLine("RefinedAbstraction: Operation called");
        _implementor.OperationImp();
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده

از الگوی Bridge در کتابخانه‌های .NET مانند ADO.NET که برای ارتباط با منابع داده مختلف مورد استفاده قرار می‌گیرد، یک مثال است.

### الگوهای مرتبط (Related Patterns):
- **Adapter Pattern**: Adapter Pattern برای تبدیل یک رابط به یک رابط دیگر استفاده می‌شود، در حالی که Bridge Pattern برای جدا کردن دو شاخص از یک ساختار استفاده می‌شود.
- **Composite Pattern**: Composite Pattern برای ساختارهای سلسله‌مراتبی از اشیاء استفاده می‌شود. با استفاده از Bridge Pattern، می‌توان روش‌های مختلفی را برای هر اشیاء در سلسله‌مراتب تعریف کرد.
- **Decorator Pattern**: Decorator Pattern برای اضافه کردن عملکردها به یک کلاس استفاده می‌شود، در حالی که Bridge Pattern برای جدا کردن اجزای ساختاری از عملیات استفاده می‌شود.