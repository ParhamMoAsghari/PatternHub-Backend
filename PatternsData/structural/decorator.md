# الگوی دکوراتور (Decorator Pattern)

### همچنین شناخته شده به عنوان:
- Wrapper Pattern

### انگیزه (Motivation):
الگوی دکوراتور برای افزودن ویژگی‌ها یا تغییر رفتار یک شیء بدون تغییر در ساختار آن مورد استفاده قرار می‌گیرد. این الگو اجازه می‌دهد تا یک شیء را پویا و به صورت پیوسته تغییر داده و ترکیبی از عملکردها را بسازیم.

### قابلیت‌استفاده (Applicability):
الگوی دکوراتور وقتی مناسب است که:
- می‌خواهیم ویژگی‌های جدید به یک شیء را اضافه کنیم بدون تغییر در ساختار آن.
- می‌خواهیم یک شیء را ترکیبی از عملکردها و ویژگی‌ها بسازیم که به صورت پویا قابل تغییر باشد.
- می‌خواهیم تعداد زیادی ترکیب‌پذیر (composable) از شیء را ایجاد کنیم.

### ساختار (Structure):
الگوی دکوراتور شامل موارد زیر است:
- Component: رابطی است که توابع برای شیء اصلی تعریف می‌کند.
- ConcreteComponent: کلاس اصلی که وظیفه اصلی را بر عهده دارد و می‌تواند توسط دکوراتورها تغییر یابد.
- Decorator: کلاسی است که رابط Component را پیاده‌سازی می‌کند و شیء اصلی را به عنوان ورودی دریافت می‌کند.
- ConcreteDecorator: کلاسی است که Decorator را گسترش می‌دهد و ویژگی‌ها و عملکردهای جدید را به شیء اصلی اضافه می‌کند.

### شرکت‌کنندگان (Participants):
- Component: رابطی که توابع برای شیء اصلی تعریف می‌کند.
- ConcreteComponent: کلاس اصلی که وظیفه اصلی را بر عهده دارد.
- Decorator: کلاسی که

رابط Component را پیاده‌سازی می‌کند و شیء اصلی را به عنوان ورودی دریافت می‌کند.
- ConcreteDecorator: کلاسی است که Decorator را گسترش می‌دهد و ویژگی‌ها و عملکردهای جدید را به شیء اصلی اضافه می‌کند.

### همکاری (Collaborations):
- Decorator همیشه یک شیء از نوع Component را به عنوان ورودی دریافت می‌کند.
- ConcreteDecorator وظیفه تغییرات و اضافه کردن عملکردها و ویژگی‌های جدید به شیء اصلی را دارند.

### پیامدها (Consequences):
استفاده از الگوی دکوراتور دارای مزایا و معایب زیر است:
- **مزایا**:
    - امکان افزودن ویژگی‌ها و عملکردهای جدید به شیء بدون تغییر در ساختار آن.
    - امکان ترکیب پیوسته ویژگی‌ها و عملکردها برای ایجاد شیء‌های پیچیده.
    - امکان توسعه و نگهداری آسان به دلیل جدا بودن کدها و قابلیت استفاده مجدد.

- **معایب**:
    - افزایش پیچیدگی کدها به دلیل ایجاد تعداد زیادی کلاس دکوراتور.
    - ممکن است باعث شود که یک شیء بارها دکوره شود و منجر به افزایش هزینه محاسباتی شود.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی دکوراتور را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Component
public interface IComponent
{
    void Operation();
}

// ConcreteComponent
public class ConcreteComponent : IComponent
{
    public void Operation()
    {
        Console.WriteLine("ConcreteComponent.Operation called");
    }
}

// Decorator
public abstract class Decorator : IComponent
{
    protected IComponent _component;

    public Decorator(IComponent component)
    {
        _component = component;
    }

    public virtual void Operation()
    {
        _component.Operation();
    }
}

// ConcreteDecorator
public class ConcreteDecoratorA : Decorator
{
    public ConcreteDecoratorA(IComponent component) : base(component)
    {
    }

    public override void Operation()
    {
        base.Operation

();
        Console.WriteLine("ConcreteDecoratorA.Operation called");
    }
}

public class ConcreteDecoratorB : Decorator
{
    public ConcreteDecoratorB(IComponent component) : base(component)
    {
    }

    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("ConcreteDecoratorB.Operation called");
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی دکوراتور در کتابخانه‌های .NET مانند `Stream` در فضای‌نام `System.IO` که امکان دستکاری و تغییر عملکرد یک جریان داده را فراهم می‌کند، یک مثال است.

### الگوهای مرتبط (Related Patterns):
- **Adapter Pattern**: Adapter Pattern برای تبدیل یک رابط به یک رابط دیگر استفاده می‌شود. اما Decorator Pattern برای افزودن ویژگی‌ها و تغییر رفتار یک شیء بدون تغییر در ساختار آن استفاده می‌شود.
- **Composite Pattern**: Composite Pattern به شیوه سلسله مراتبی از شیء‌ها را مدیریت می‌کند و امکان تعامل با همه شیء‌ها را فراهم می‌کند. اما Decorator Pattern تمرکز خود را بر روی افزودن ویژگی‌ها و تغییر رفتار یک شیء به صورت پویا دارد.