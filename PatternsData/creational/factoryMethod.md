# الگوی Factory Method (متد کارخانه)

### همچنین شناخته شده به عنوان:
- روش سازنده (Creator Method)
- روش تولید (Virtual Constructor)

### انگیزه (Motivation):
الگوی Factory Method برای ساخت آبجکت‌ها با استفاده از یک روش کارخانه استفاده می‌شود. این الگو به ما امکان می‌دهد تا ساخت یک آبجکت را به زیرکلاس‌ها منتقل کنیم و هر زیرکلاس می‌تواند نوع خاصی از آبجکت را ایجاد کند.

### قابلیت‌استفاده (Applicability):
الگوی Factory Method وقتی مناسب است که:
- بخواهیم کد ساخت آبجکت را از کد کاربری جدا کنیم.
- می‌خواهیم یک آبجکت را ایجاد کنیم ولی نمی‌دانیم که نوع دقیق آن چیست.
- می‌خواهیم مسئولیت ایجاد آبجکت را به زیرکلاس‌ها منتقل کنیم.

### ساختار (Structure):
الگوی Factory Method شامل موارد زیر است:
- `Product`: آبجکتی است که توسط الگوی Factory Method ساخته می‌شود.
- `Creator`: کلاسی است که روش Factory Method را داراست و مسئول ساخت آبجکت است. این کلاس می‌تواند یک کلاس انتزاعی باشد یا یک کلاس کانکرت با روش کارخانه متداول.
- `ConcreteCreator`: کلاسی است که از کلاس Creator ارث‌بری می‌کند و روش Factory Method را پیاده‌سازی می‌کند و یک نمونه از آبجکت مورد نظر را ایجاد می‌کند.

### شرکت‌کنندگان (Participants):
- `Product`: آبجکتی که توسط الگوی Factory Method ساخته می‌شود.
- `Creator`: کلاسی که روش Factory Method را داراست و مسئول ساخت آبجکت است.
- `ConcreteCreator`: کلاسی که از کلاس Creator ارث‌بری می‌کند و روش Factory Method را پ

یاده‌سازی می‌کند و یک نمونه از آبجکت مورد نظر را ایجاد می‌کند.

### همکاری (Collaborations):
- کاربری که نیاز به ساخت آبجکت دارد، با استفاده از روش Factory Method کلاس Creator را فراخوانی می‌کند تا یک نمونه از آبجکت مورد نظر را ایجاد کند.

### پیامدها (Consequences):
استفاده از الگوی Factory Method دارای مزایا و معایب زیر است:
- **مزایا**:
    - اجتناب از وابستگی کد به نوع خاصی از آبجکت.
    - افزایش قابلیت توسعه و انعطاف‌پذیری برنامه.
    - افزایش کد قابل استفاده مجدد و ماژولاریتهای برنامه.
    - جدا بودن فرآیند ساخت آبجکت از کاربری آن.

- **معایب**:
    - افزایش پیچیدگی کلاس‌ها و تعداد آبجکت‌ها.
    - ممکن است منجر به کاهش عملکرد شود اگر از Factory Method‌ها به طور نادرست استفاده شود.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی Factory Method را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Product
public interface IProduct
{
    void Operation();
}

// ConcreteProduct
public class ConcreteProductA : IProduct
{
    public void Operation()
    {
        Console.WriteLine("ConcreteProductA operation");
    }
}

public class ConcreteProductB : IProduct
{
    public void Operation()
    {
        Console.WriteLine("ConcreteProductB operation");
    }
}

// Creator
public abstract class Creator
{
    public abstract IProduct FactoryMethod();

    public void Operation()
    {
        IProduct product = FactoryMethod();
        product.Operation();
    }
}

// ConcreteCreator
public class ConcreteCreatorA : Creator
{
    public override IProduct FactoryMethod()
    {
        return new ConcreteProductA();
    }
}

public class ConcreteCreatorB : Creator
{
    public override IProduct FactoryMethod()
    {
        return new ConcreteProductB();
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی Factory Method برای ساخت آبجکت‌های مختلف در کتابخانه‌های .NET مانند `System.Data.Common.DbProviderFactory` یک مثال است.



### الگوهای مرتبط (Related Patterns):
- **Abstract Factory**: Abstract Factory و Factory Method هر دو الگوهایی هستند که در خصوص ساخت آبجکت‌ها مورد استفاده قرار می‌گیرند. اما Abstract Factory به صورت یک سلسله مراتبی از Factory Method‌ها عمل می‌کند.
- **Singleton**: در برخی موارد، Factory Method با Singleton ترکیب می‌شود تا یک نمونه از آبجکت را ساخته و بازگرداند.