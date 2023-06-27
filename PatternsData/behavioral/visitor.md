# الگوی ویزیتور (Visitor Pattern)

### همچنین شناخته شده به عنوان:
- بازدیدکننده

### انگیزه (Motivation):
الگوی ویزیتور استفاده می‌شود وقتی که بخواهیم عملیاتی را روی مجموعه‌ای از شیءها انجام دهیم، اما بدون تغییر در کلاسهایی که عملیات روی آنها صورت می‌گیرد. این الگو اجازه می‌دهد تا یک عملیات جدید را به اشیاء مختلف اعمال کنیم بدون این که کلاسها را تغییر دهیم.

### قابلیت‌استفاده (Applicability):
الگوی ویزیتور مناسب است وقتی که:
- می‌خواهیم یک عملیات را روی یک مجموعه از شیءها انجام دهیم ولی نمی‌خواهیم تغییراتی در کلاسهای این شیءها ایجاد کنیم.
- عملیات مورد نظر در کلاسهای مختلف بسته به نوع شیء متفاوت است.
- تعداد کلاسها و عملیات‌ها بسیار زیاد است و الگوی ویزیتور می‌تواند ساختاری ساده‌تر و قابل توسعه‌تر را ایجاد کند.

### ساختار (Structure):
الگوی ویزیتور شامل موارد زیر است:
- `Visitor`: رابطی که تعریف می‌کند که عملیاتی بر روی شیءهای مختلف انجام می‌دهد.
- `ConcreteVisitor`: یک یا چند کلاس که عملیاتهای مختلف را بر روی شیءها اجرا می‌کند.
- `Element`: رابطی که تعریف می‌کند متدی برای دریافت بازدیدکننده.
- `ConcreteElement`: کلاسی که روش `Accept` را پیاده‌سازی می‌کند تا بازدیدکننده را مشخص کند.
- `ObjectStructure`: مجموعه‌ای از شیءها که توسط بازدیدکننده بازدید

می‌شوند.

### شرکت‌کنندگان (Participants):
- `Visitor`: رابطی که تعریف می‌کند که عملیاتی بر روی شیءهای مختلف انجام می‌دهد.
- `ConcreteVisitor`: یک یا چند کلاس که عملیاتهای مختلف را بر روی شیءها اجرا می‌کند.
- `Element`: رابطی که تعریف می‌کند متدی برای دریافت بازدیدکننده.
- `ConcreteElement`: کلاسی که روش `Accept` را پیاده‌سازی می‌کند تا بازدیدکننده را مشخص کند.
- `ObjectStructure`: مجموعه‌ای از شیءها که توسط بازدیدکننده بازدید می‌شوند.

### همکاری (Collaborations):
- بازدیدکننده (`Visitor`) به وسیله روش `Visit`، به ترتیب روی شیءها (`Element`) صدا زده می‌شود.

### پیامدها (Consequences):
استفاده از الگوی ویزیتور دارای مزایا و معایب زیر است:
- **مزایا**:
    - افزایش قابلیت توسعه و انعطاف‌پذیری برنامه با اضافه کردن عملیات‌های جدید بدون تغییر در کلاسهای موجود.
    - جدا بودن عملیات‌ها از کلاسها و امکان افزودن عملیات جدید به کلاسها بدون تغییر در بازدیدکننده.
    - امکان پیمایش مجموعه‌ای از شیءها و اجرای عملیات بر روی همه آنها.

- **معایب**:
    - افزایش پیچیدگی کد به دلیل ایجاد رابطه دوطرفه بین بازدیدکننده و کلاس‌ها.
    - کاهش در سرعت اجرا به دلیل افزایش تعداد مراجعات و روش‌ها.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی ویزیتور را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Visitor


public interface IVisitor
{
    void Visit(Element element);
}

// ConcreteVisitor
public class ConcreteVisitor : IVisitor
{
    public void Visit(Element element)
    {
        Console.WriteLine($"Visiting {element.GetType().Name}");
    }
}

// Element
public abstract class Element
{
    public abstract void Accept(IVisitor visitor);
}

// ConcreteElement
public class ConcreteElementA : Element
{
    public override void Accept(IVisitor visitor)
    {
        visitor.Visit(this);
    }
}

public class ConcreteElementB : Element
{
    public override void Accept(IVisitor visitor)
    {
        visitor.Visit(this);
    }
}

// ObjectStructure
public class ObjectStructure
{
    private List<Element> elements = new List<Element>();

    public void Attach(Element element)
    {
        elements.Add(element);
    }

    public void Detach(Element element)
    {
        elements.Remove(element);
    }

    public void Accept(IVisitor visitor)
    {
        foreach (var element in elements)
        {
            element.Accept(visitor);
        }
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
الگوی ویزیتور در بسیاری از کتابخانه‌ها و فریم‌ورک‌ها استفاده می‌شود، مانند کتابخانه جاوا AWT (Abstract Window Toolkit) که در آن از الگوی ویزیتور برای رسم گرافیکی استفاده می‌شود.

### الگوهای مرتبط (Related Patterns):
- **Composite Pattern**: الگوی ویزیتور معمولاً با الگوی Composite Pattern استفاده می‌شود. این دو الگو با همکاری، امکان اجرای یک عملیات بر روی مجموعه‌ای از اشیاء با ساختار سلسله‌مراتبی را فراهم می‌کنند.
- **Iterator Pattern**: الگوی ویزیتور و الگوی Iterator هر دو الگوهای پیمایش مجموعه‌ای از اشیاء هستند. اما الگوی ویزیتور برای اجرای عملیات‌های مختلف بر روی شیءها استفاده می‌شود، در حالی که الگوی Iterator فقط برای پیمایش و دسترسی به اشیاء استفاده می‌شود.