## الگوی Interpreter (الگوی تفسیرگر)

### همچنین شناخته شده به عنوان:
- الگوی تفسیرگر

### انگیزه (Motivation):
الگوی Interpreter برای تعبیر و اجرای عبارات زبان مورد نظر استفاده می‌شود. این الگو برای ساختاردهی قواعد گرامری و تفسیر عبارات استفاده می‌شود.

### قابلیت‌استفاده (Applicability):
الگوی Interpreter مناسب است در موارد زیر:
- وقتی که قواعد گرامری یک زبان را به صورت سلسله‌مراتبی ساختاردهی کرده و قصد تفسیر و اجرای عبارات آن را داریم.
- وقتی که بخواهیم به راحتی قابلیت افزودن قواعد جدید به زبان را داشته باشیم.
- وقتی که می‌خواهیم از عبارات پیچیده‌تر تشکیل شده از عبارات ساده‌تر استفاده کنیم.

### ساختار (Structure):
الگوی Interpreter شامل موارد زیر است:
- `AbstractExpression`: رابطی است که تعیین می‌کند چگونه عبارت‌ها را تفسیر کند.
- `TerminalExpression`: عبارتی است که نماینده یک ترمینال در گرامر است و تفسیر آن اجرا می‌شود.
- `NonterminalExpression`: عبارتی است که نماینده یک غیرترمینال در گرامر است و تفسیر آن از ترکیب عبارات دیگر تشکیل می‌شود.
- `Context`: محیطی است که شامل اطلاعات مورد نیاز برای تفسیر عبارات است.

### شرکت‌کنندگان (Participants):
- `AbstractExpression`: رابطی که تعیین می‌کند چگونه عبارت‌ها را تفسیر کند.
- `TerminalExpression`: کلاسی که ترمینال‌ها را نماینده می‌شود و تفسیر آنها اجرا می‌شود.
- `NonterminalExpression`: کلاسی که غیرترمینال‌ها را نماینده می‌شود و تفسیر آنها ا

ز ترکیب عبارات دیگر تشکیل می‌شود.
- `Context`: محیطی که شامل اطلاعات مورد نیاز برای تفسیر عبارات است.

### همکاری (Collaborations):
- `AbstractExpression` متدهای تفسیر را تعریف می‌کند که در آنها به `Context` نیاز دارد.
- `TerminalExpression` عبارت‌های ترمینال را تفسیر می‌کند.
- `NonterminalExpression` عبارت‌های غیرترمینال را تفسیر می‌کند و ترکیب عبارات دیگر را انجام می‌دهد.

### پیامدها (Consequences):
بهره‌برداری از الگوی Interpreter دارای مزایا و معایب زیر است:
- **مزایا**:
    - امکان تعبیر و اجرای عبارات زبان در ساختار سلسله‌مراتبی.
    - امکان افزودن قواعد جدید به زبان به صورت ساده.
    - جدا بودن قواعد گرامری و تفسیر عبارات در ساختار برنامه.

- **معایب**:
    - عملکرد الگوی Interpreter در صورت استفاده از عبارات پیچیده ممکن است کاهش یابد.
    - زیاد شدن تعداد کلاس‌های مربوط به تعبیرگرها در صورت افزودن قواعد جدید.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، الگوی Interpreter را می‌توان به صورت زیر پیاده‌سازی کرد:

```csharp
// Abstract Expression
public abstract class Expression
{
    public abstract int Interpret(Context context);
}

// Terminal Expression
public class TerminalExpression : Expression
{
    public override int Interpret(Context context)
    {
        // تفسیر عبارت ترمینال
    }
}

// Nonterminal Expression
public class NonterminalExpression : Expression
{
    public override int Interpret(Context context)
    {
        // تفسیر عبارت غیرترمینال با ترکیب عبارات دیگر
    }
}

// Context
public class Context
{
    // اطلاعات مورد نیاز برای تفسیر عبارات
}
```

### استفاده‌های شناخته شده (Known Uses):
الگوی Interpreter در طراحی زبان‌های برنامه‌نویسی، در تحلیل و تفس

یر عبارات ریاضی و منطقی، در سیستم‌های مبتنی بر قواعد (Rule-Based Systems) و در ساختاردهی قواعد گرامری (Parsing) استفاده می‌شود.

### الگوهای مرتبط (Related Patterns):
- **Composite Pattern**: از Composite Pattern می‌توان برای ساختاردهی سلسله‌مراتبی عبارات در الگوی Interpreter استفاده کرد.
- **Builder Pattern**: Builder Pattern می‌تواند برای ساختاردهی عبارات در الگوی Interpreter استفاده شود.
- **Visitor Pattern**: Visitor Pattern می‌تواند برای اجرای عملیات‌های مختلف بر روی عبارات در الگوی Interpreter استفاده شود.