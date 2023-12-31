# الگوی استراتژی (Strategy Pattern)

### همچنین شناخته شده به عنوان:
- الگوی روش (Policy Pattern)

### انگیزه (Motivation):
الگوی استراتژی استفاده می‌شود وقتی که بخواهیم بخشی از الگوریتم یک کلاس را قابل تغییر و تعویض کنیم، بدون این که تاثیری بر بقیه قسمت‌ها بگذارد. با استفاده از این الگو، می‌توانیم الگوریتم‌ها را به صورت مستقل از کلاس اصلی پیاده‌سازی کنیم و آن‌ها را در زمان اجرا تغییر دهیم.

### قابلیت‌استفاده (Applicability):
الگوی استراتژی وقتی مناسب است که:
- می‌خواهیم قابلیت انتخاب بین چندین الگوریتم مختلف را در یک کلاس داشته باشیم.
- می‌خواهیم یک بخشی از الگوریتم یک کلاس را قابل تغییر و تعویض کنیم بدون تاثیر بر سایر بخش‌های کلاس.

### ساختار (Structure):
الگوی استراتژی شامل موارد زیر است:
- `Context`: کلاسی است که نیاز به استفاده از الگوریتم‌ها دارد و با استفاده از یک شیء استراتژی، آن را اجرا می‌کند.
- `Strategy`: رابط یا کلاسی است که الگوریتم‌ها را تعریف می‌کند.
- `ConcreteStrategy`: کلاس‌هایی که الگوریتم‌ها را پیاده‌سازی می‌کنند.

### شرکت‌کنندگان (Participants):
- `Context`: کلاسی که نیاز به استفاده از الگوریتم‌ها دارد و با استفاده از یک شیء استراتژی، آن را اجرا می‌کند.
- `Strategy`: رابط یا کلاسی که الگوریتم‌ها را تعریف می‌کند.
- `ConcreteStrategy`: کلاس‌هایی که الگوریتم‌ها را پیاده‌سازی می‌ک

نند.

### همکاری (Collaborations):
- `Context` با استفاده از رابط `Strategy` با الگوریتم مورد نظر همکاری می‌کند. `Context` در زمان اجرا، یک شیء استراتژی از نوع `Strategy` را دریافت کرده و الگوریتم مربوطه را فراخوانی می‌کند.

### پیامدها (Consequences):
استفاده از الگوی استراتژی دارای مزایا و معایب زیر است:
- **مزایا**:
    - امکان تعویض الگوریتم‌ها در زمان اجرا بدون تغییر در کلاس اصلی.
    - جداسازی کامل الگوریتم‌ها از کلاس اصلی و قابلیت استفاده مجدد از آن‌ها.
    - کاهش وابستگی‌ها و افزایش انعطاف‌پذیری در ساختار برنامه.

- **معایب**:
    - ایجاد بیشترین تعداد کلاس‌های جدید در صورتی که تعداد الگوریتم‌ها زیاد باشد.
    - افزایش پیچیدگی کد در صورتی که بخش‌های مختلف کلاس اصلی به الگوریتم‌ها وابسته باشند.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی استراتژی را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Strategy
public interface IStrategy
{
    void DoAlgorithm();
}

// Concrete Strategies
public class ConcreteStrategyA : IStrategy
{
    public void DoAlgorithm()
    {
        Console.WriteLine("Using Algorithm A");
    }
}

public class ConcreteStrategyB : IStrategy
{
    public void DoAlgorithm()
    {
        Console.WriteLine("Using Algorithm B");
    }
}

// Context
public class Context
{
    private IStrategy _strategy;

    public Context(IStrategy strategy)
    {
        _strategy = strategy;
    }

    public void ExecuteAlgorithm()
    {
        _strategy.DoAlgorithm();
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی استراتژی در کتابخانه‌های .NET مانند Entity Framework که به کاربران امکان انتخاب روش‌های مختلف ترجمه کوئری‌ها را می‌دهد، یک مثال است.

### الگوهای م

رتبط (Related Patterns):
- **Template Method Pattern**: در Template Method Pattern، الگوریتمی در کلاس اصلی تعریف شده و بخش‌هایی از آن را می‌توان در زیرکلاس‌ها تغییر داد. در حالی که در استراتژی، الگوریتم به صورت کامل جدا از کلاس اصلی پیاده‌سازی می‌شود و با استفاده از شیء استراتژی قابل تعویض است.