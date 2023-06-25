# الگوی سازنده (Builder Pattern)

### همچنین شناخته شده به عنوان:
- سازنده (Creator)

### انگیزه (Motivation):
الگوی سازنده مورد استفاده قرار می‌گیرد وقتی که می‌خواهیم یک شیء پیچیده را به صورت مرحله به مرحله ایجاد کنیم و قابل تغییر و تنظیم باشد. این الگو اجازه می‌دهد تا فرآیند ساخت یک شیء را از جزئیات آن جدا کنیم و از آن استفاده کنیم تا تنظیمات مختلفی را برای ساخت شیء فراهم کنیم.

### قابلیت استفاده (Applicability):
الگوی سازنده وقتی مناسب است که:
- بخواهیم یک شیء پیچیده را مرحله به مرحله بسازیم و قابل تغییر و تنظیم باشد.
- بخواهیم از یک متد ساخت استفاده کنیم که قابلیت ایجاد انواع مختلفی از شیء را فراهم کند.
- بخواهیم فرآیند ساخت یک شیء را از جزئیات آن جدا کنیم تا بتوانیم ساختار و نحوه ساخت آن را تغییر دهیم.

### ساختار (Structure):
الگوی سازنده شامل موارد زیر است:
- `Builder`: رابطی است که مشخص می‌کند چه گونه قسمت‌های مختلف شیء را ساخته و تنظیم کند.
- `ConcreteBuilder`: کلاسی است که `Builder` را پیاده‌سازی می‌کند و قسمت‌های مختلف شیء را ساخته و تنظیم می‌کند.
- `Director`: کلاسی است که فرآیند ساخت شیء را کنترل می‌کند و از `Builder` برای ساخت شیء استفاده می‌کند.
- `Product`: شیء نهایی که توسط `Builder` ساخته می‌شود.

### شرکت‌کنند

گان (Participants):
- `Builder`: رابطی که مشخص می‌کند چه گونه قسمت‌های مختلف شیء را ساخته و تنظیم کند.
- `ConcreteBuilder`: کلاسی که `Builder` را پیاده‌سازی می‌کند و قسمت‌های مختلف شیء را ساخته و تنظیم می‌کند.
- `Director`: کلاسی که فرآیند ساخت شیء را کنترل می‌کند و از `Builder` برای ساخت شیء استفاده می‌کند.
- `Product`: شیء نهایی که توسط `Builder` ساخته می‌شود.

### همکاری (Collaborations):
- `Director` با استفاده از `Builder` فرآیند ساخت شیء را کنترل می‌کند.
- `ConcreteBuilder` شیء را ساخته و تنظیم می‌کند.
- `Product` شیء نهایی است که توسط `Builder` ساخته می‌شود.

### پیامدها (Consequences):
استفاده از الگوی سازنده دارای مزایا و معایب زیر است:
- **مزایا**:
    - امکان ساخت شیء‌های پیچیده و قابل تغییر بدون وابستگی به ساختار داخلی آنها.
    - امکان تنظیمات مختلف در فرآیند ساخت یک شیء.
    - جدا بودن فرآیند ساخت از نحوه استفاده از شیء و از هم جدا بودن سطوح بالا و پایین در ساختار برنامه.

- **معایب**:
    - ایجاد کلاس‌های بیشتری در برنامه به دنبال دارد.
    - ایجاد کدهای بیشتری برای پیاده‌سازی الگو و احتمال خطا بیشتری.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی سازنده را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Product
public class Product
{
    public string PartA { get; set; }
    public string PartB { get; set; }
    public string PartC { get; set; }
}

// Builder


public interface IBuilder
{
    void BuildPartA();
    void BuildPartB();
    void BuildPartC();
    Product GetResult();
}

// ConcreteBuilder
public class ConcreteBuilder : IBuilder
{
    private Product _product;

    public ConcreteBuilder()
    {
        _product = new Product();
    }

    public void BuildPartA()
    {
        _product.PartA = "Part A";
    }

    public void BuildPartB()
    {
        _product.PartB = "Part B";
    }

    public void BuildPartC()
    {
        _product.PartC = "Part C";
    }

    public Product GetResult()
    {
        return _product;
    }
}

// Director
public class Director
{
    public void Construct(IBuilder builder)
    {
        builder.BuildPartA();
        builder.BuildPartB();
        builder.BuildPartC();
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
الگوی سازنده در زبان برنامه‌نویسی C# در کتابخانه‌هایی مانند Entity Framework برای ساخت کوئری‌های پیچیده استفاده می‌شود. همچنین در ساختار UI برنامه‌های گرافیکی و ساختار سیستم‌های مبتنی بر کامپوننت نیز استفاده می‌شود.

### الگوهای مرتبط (Related Patterns):
- **Abstract Factory Pattern**: Abstract Factory Pattern می‌تواند از الگوی سازنده استفاده کند تا شیء‌های مرتبط را تولید کند، اما الگوی سازنده فقط بر روی یک شیء کار می‌کند.
- **Prototype Pattern**: Prototype Pattern از الگوی سازنده استفاده می‌کند تا شیء‌های جدید را از شیء‌های موجود تولید کند، اما تفاوت اصلی در این است که Prototype Pattern از روش کپی استفاده می‌کند در حالی که الگوی سازنده شیء را به صورت مرحله به مرحله ساخت می‌کند.